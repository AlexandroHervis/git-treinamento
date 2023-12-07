import { User } from "./user";

export class MicrosoftUser implements User {
  getName(): string {
    throw new Error("Method not implemented.");
  }
}
