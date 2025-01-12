import { now } from "./util";

export function echo(msg: string) {
  return `[${now()}]:echo->${msg}`;
}
