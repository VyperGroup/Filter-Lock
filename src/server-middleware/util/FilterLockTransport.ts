import getConfig from "../../getConfig";

// TODO: Import all of these modes


// TODO: Use bare-mux
function createFilterLockSwitcher(bareSwitcher) {
  if (bareSwitcher instanceof BareTransport)
    return class FilterLockTransport extends bareSwitcher {
      async fetch()
        // TODO: Implement these modes and use them as per the config specifies.

        const req = new Response(...arguments);

        const resp = await super.fetch(req);

        return resp;
      }
    };
}
