import Realm from "realm";
import { AccountSchema } from "./schemas/accountSchema";

export const realmConnection = new Realm({
    path: "accountRealm",
    schema: [AccountSchema],
});
