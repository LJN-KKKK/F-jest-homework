import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    // const result = getUsers();
    // await expect(result).resolves.toEqual({name:"2333"});
    axios.get.mockResolvedValue({ data: "2333" });
    await expect(getUsers()).resolves.toEqual("2333");
  });
});
