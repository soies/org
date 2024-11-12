import { type SchemaTypeDefinition } from "sanity";
import { alumni } from "./schema/alumni";
import { journal } from "./schema/journal";
import { magazine } from "./schema/magazine";
import { notice } from "./schema/notice";
import { project } from "./schema/project";
import { team } from "./schema/team";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [notice, alumni, project, team, journal, magazine],
};
