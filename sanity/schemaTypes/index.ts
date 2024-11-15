import { type SchemaTypeDefinition } from "sanity";
import { alumni } from "./schema/alumni";
import { journal } from "./schema/journal";
import { magazine } from "./schema/magazine";
import { notice } from "./schema/notice";
import { event } from "./schema/event";
import { team } from "./schema/team";
import { hero } from "./schema/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [notice, alumni, event, team, journal, magazine, hero],
};
