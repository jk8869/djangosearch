export interface Tag{
    id: String,
    name: String
}

export class TagConvert {
  public static toTag(json: string): Tag {
    return JSON.parse(json);
  }

  public static tagToJson(value: Tag): string {
    return JSON.stringify(value);
  }
}
