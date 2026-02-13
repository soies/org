import { alumni } from "./schema/alumni";
import { journal } from "./schema/journal";
import { magazine } from "./schema/magazine";
import { notice } from "./schema/notice";
import { event } from "./schema/event";
import { team } from "./schema/team";

export const schema = {
  types: [
    notice, 
    alumni, 
    event, 
    team, 
    journal, 
    magazine, 
  ],
};