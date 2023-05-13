import { Request, Response } from "express";
import { Octokit } from "octokit";

import { config } from "./../config";

const APIKEY = config.github.apiKey;
const octokit = new Octokit({ auth: APIKEY });

export async function getMostPopularRepos(_req: Request, resp: Response) {
  const USER = "google";

  try {
    const data = await octokit.request("GET /search/repositories", {
      q: "user:" + USER,
      sort: "stars",
      order: "desc",
      per_page: 10
    });

    if (data.status === 200) {
      const repos = data.data.items.map((repo) => {
        const {
          id,
          full_name,
          description,
          html_url,
          topics,
          stargazers_count
        } = repo;

        return {
          id,
          full_name,
          description,
          html_url,
          topics,
          stars: stargazers_count
        };
      });

      resp.status(200).send({ repos });
    }
  } catch (reason) {
    console.log(reason);
    resp.status(500).send();
  }
}
