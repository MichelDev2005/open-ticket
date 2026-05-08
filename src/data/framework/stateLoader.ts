import {opendiscord, api, utilities} from "../../index.js"

export const loadAllStates = async () => {
    const stateDatabase = opendiscord.databases.get("opendiscord:message-states")

    opendiscord.states.add(new api.ODMessageOriginState("opendiscord:message-origin",opendiscord.client,stateDatabase,{}))
}