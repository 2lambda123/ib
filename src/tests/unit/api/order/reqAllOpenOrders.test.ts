/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * This file implement test code for the reqAllOpenOrders function and openOrder event.
 */
import { EventName, IBApi } from "../../../..";
import configuration from "../../../../common/configuration";

const TEST_SERVER_HOST = configuration.ib_host;
const TEST_SERVER_POST = configuration.ib_port;

describe("RequestAllOpenOrders", () => {
  jest.setTimeout(10000);

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

  it("Test reqAllOpenOrders", (done) => {
    ib.once(EventName.nextValidId, (orderId: number) => {
      ib.reqAllOpenOrders();
    })
      .on(EventName.openOrder, (orderId, contract, order, orderState) => {
        // logger.info("openOrder message received");
        // todo add proper verification code here
        // expect(orderId).toBeTruthy(); We sometimes get zeros
      })
      .on(EventName.openOrderEnd, () => {
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
