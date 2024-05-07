const mockResponse = {
  data: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
  ],
};
jest.mock("../services/todos.js", () => ({
  getTODOSById: jest.fn().mockReturnValue(mockResponse),
}));

jest.mock("../utils/todos.js", () => ({
  displayTODOList: jest.fn()
}));

const mockTODOService = require("../services/todos.js");
const mockUtilService = require("../utils/todos.js");
const ShowStatusCommand = require("../commands/show-status.js");

describe("showTODOStatus", () => {
  test("showTODOStatus", async () => {
    await ShowStatusCommand.showTODOStatus("even", 20);
    expect(mockTODOService.getTODOSById).toHaveBeenCalledTimes(20);
    expect(mockUtilService.displayTODOList).toHaveBeenCalledTimes(1);
  });
});
