import {Injectable} from "@angular/core";
import {Nuz} from "./nuz";
import {NOZE} from "./mock-noze";

@Injectable()
export class NuzService{
  getNoze(): Promise<Nuz[]> {
  return Promise.resolve(NOZE);
}
}
