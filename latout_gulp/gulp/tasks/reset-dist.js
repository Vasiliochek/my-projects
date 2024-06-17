import { deleteAsync } from "del";

export const resetDist = () => {
  return deleteAsync(app.path.clean);
};
