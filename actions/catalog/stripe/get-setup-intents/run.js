const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_STRIPE_API_KEY,
    attach_to_self,
    created,
    customer,
    ending_before,
    expand,
    limit,
    payment_method,
    starting_after,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.stripe.com/v1/setup_intents",
      headers: {
        Authorization: `Bearer ${BUILDABLE_STRIPE_API_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: {
        ...(attach_to_self ? { attach_to_self } : {}),
        ...(created ? { created } : {}),
        ...(customer ? { customer } : {}),
        ...(ending_before ? { ending_before } : {}),
        ...(expand ? { expand } : {}),
        ...(limit ? { limit } : {}),
        ...(payment_method ? { payment_method } : {}),
        ...(starting_after ? { starting_after } : {}),
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
const verifyInput = ({ BUILDABLE_STRIPE_API_KEY }) => {
  const ERRORS = {
    INVALID_BUILDABLE_STRIPE_API_KEY:
      "A valid BUILDABLE_STRIPE_API_KEY field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
  };

  if (typeof BUILDABLE_STRIPE_API_KEY !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_STRIPE_API_KEY);
};
