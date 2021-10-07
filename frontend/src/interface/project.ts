/* eslint-disable camelcase */
// To parse this data:
//
//   import { Convert, OrderDetail } from "./file";
//
//   const orderDetail = Convert.toOrderDetail(json);

export interface Project {
    id: string;
    title: string;
    descriptions: string;
    featured_image: string;
    demo_link: string;
    source_link: string;
    vote_total: number;
    vote_ratio: number;
    created: Date;
    tags: string[];
}

// Converts JSON strings to/from your types
export class ProjectConvert {
  public static toProject(json: string): Project {
    return JSON.parse(json);
  }

  public static projectToJson(value: Project): string {
    return JSON.stringify(value);
  }
}
