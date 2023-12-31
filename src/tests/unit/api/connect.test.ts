import { IBApi } from "../../../api/api";
import { EventName } from "../../../api/data/enum/event-name";
import configuration from "../../../common/configuration";

describe("IBApi connection Tests", () => {
  jest.setTimeout(5 * 1000);

  let ib: IBApi;
  const clientId = Math.floor(Math.random() * 32766) + 1; // ensure unique client

  beforeEach(() => {
    ib = new IBApi({
      host: configuration.ib_host,
      port: configuration.ib_port,
      clientId,
    });
    // logger.info("IBApi created");
  });

  afterEach(() => {
    if (ib) {
      ib.disconnect();
      ib = undefined;
    }
    // logger.info("IBApi disconnected");
  });

  test("Connect", (done) => {
    // logger.info("Starting Connect");
    ib.on(EventName.connected, () => {
      done();
    }).on(EventName.error, (err, code, reqId) => {
      done(`[${reqId}] ${err.message} (#${code})`);
    });

    ib.connect();
  });

  test("Disconnect", (done) => {
    // logger.info("Starting Disconnect");
    ib.on(EventName.connected, () => {
      ib.disconnect();
      ib = undefined;
    })
      .on(EventName.disconnected, () => {
        done();
      })
      .on(EventName.error, (err, code, reqId) => {
        done(`[${reqId}] ${err.message} (#${code})`);
      });

    ib.connect();
  });

  test("Connect / disconnect", (done) => {
    // logger.info("Starting (Dis)Connect");
    ib.on(EventName.connected, () => {
      ib.reqCurrentTime();
    })
      .on(EventName.currentTime, (time) => {
        expect(time).toBeTruthy();
        if (ib) ib.disconnect();
      })
      .on(EventName.disconnected, () => {
        done();
      })
      .on(EventName.error, (err, code, reqId) => {
        done(`[${reqId}] ${err.message} (#${code})`);
      });

    ib.connect();
  });
});
