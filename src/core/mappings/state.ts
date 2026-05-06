///////////////////////////////////////
//OPEN TICKET STATE MAPPINGS
///////////////////////////////////////
import * as api from "@open-discord-bots/framework/api"
import * as discord from "discord.js"

/**## ODStateManagerIdMappings `interface`
 * A list of all available IDs in the default `ODStateManager` class in `opendiscord`.
 * It's used to generate typescript declarations for this class.
 */
export interface ODStateManagerIdMappings extends api.ODStateManagerIdConstraint {
    //"opendiscord:example-state":api.ODState<any>,
}

/////////////////////////////
////// MAPPED MANAGERS //////
/////////////////////////////

/**## ODMappedStateManager `class
 * A special class with types for the Open Ticket `ODStateManager` class.
 */
export class ODMappedStateManager extends api.ODStateManager<ODStateManagerIdMappings> {}