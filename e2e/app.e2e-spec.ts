import { Browser, remote, RemoteOptions } from "webdriverio";

const config: RemoteOptions = {
	baseUrl: process.env.BASE_URL || "http://localhost:3000",
	capabilities: {
		browserName: "chrome",
	},
	hostname: process.env.SELENIUM_HOST || "localhost",
	logLevel: "warn",
	path: "/wd/hub",
};

const testId = (selector: string): string => `[data-testid="${selector}"]`;

describe("app", () => {
	let browser: Browser<"async">;

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
