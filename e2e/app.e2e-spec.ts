import { BrowserObject, remote, RemoteOptions } from "webdriverio";

const config: RemoteOptions = {
	baseUrl: "http://localhost:3000",
	capabilities: {
		browserName: "chrome",
	},
	logLevel: "warn",
};

const testId = (selector: string): string => `[data-testid="${selector}"]`;

describe("app", () => {
	let browser: BrowserObject;

	beforeAll(async () => {
		browser = await remote(config);
	});

	afterAll(async () => {
		if (browser) {
			await browser.deleteSession();
		}
	});

	it("says hello", async () => {
		await browser.url("/");
		const element = await browser.$(testId("welcome-message"));
		expect(await element.getText()).toBe("Hello world");
	});
});
