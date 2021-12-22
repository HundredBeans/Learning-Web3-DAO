import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xFBBe589DF1221b3045ed21e88a923f74febAD71e",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Totsuki Badge",
        description: "This NFT will give you access to TotsukiDAO!",
        image: readFileSync("scripts/assets/totsuki.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()