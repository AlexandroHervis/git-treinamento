export class UserService {
  constructor() {}

  async getUser(id: string) {
    return {
      id,
      name: "John Doe",
      email: "",
    };
  }
}
