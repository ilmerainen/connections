const axios = require("axios");

const run = async (input) => {
  const {
    BUILDABLE_TATUM_API_KEY,
    BUILDABLE_TATUM_API_URL,
    chain,
    tokenId,
    tokenAddress,
    pageSize,
    offset,
    from,
    to,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: `{TATUM_API_URL}/v3/nft/transaction/tokenId/${chain}/${tokenAddress}/${tokenId}`,
      headers: { "x-api-key": BUILDABLE_TATUM_API_KEY },
      params: {
        pageSize,
        ...(offset ? { offset } : {}),
        ...(from ? { from } : {}),
        ...(to ? { to } : {}),
      },
    });

    return data;
  } catch (error) {
    return {
      failed: true,
      message: error.message,
      data: error.response.data,
    };
  }
};

/**
 * Verifies the input parameters
 */
const verifyInput = ({
  BUILDABLE_TATUM_API_KEY,
  BUILDABLE_TATUM_API_URL,
  chain,
  tokenId,
  tokenAddress,
  pageSize,
}) => {
  const ERRORS = {
    INVALID_BUILDABLE_TATUM_API_KEY:
      "A valid BUILDABLE_TATUM_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TATUM_API_URL:
      "A valid BUILDABLE_TATUM_API_URL field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_CHAIN: "A valid chain field (string) was not provided in the input.",
    INVALID_TOKEN_ID: "A valid tokenId field (number) was not provided in the input.",
    INVALID_TOKEN_ADDRESS: "A valid tokenAddress field (string) was not provided in the input.",
    INVALID_PAGE_SIZE: "A valid pageSize field (number) was not provided in the input.",
  };

  if (typeof BUILDABLE_TATUM_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_KEY);
  if (typeof BUILDABLE_TATUM_API_URL !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TATUM_API_URL);
  if (typeof chain !== "string") throw new Error(ERRORS.INVALID_CHAIN);
  if (typeof tokenId !== "number") throw new Error(ERRORS.INVALID_TOKEN_ID);
  if (typeof tokenAddress !== "string") throw new Error(ERRORS.INVALID_TOKEN_ADDRESS);
  if (typeof pageSize !== "number") throw new Error(ERRORS.INVALID_PAGE_SIZE);
};
