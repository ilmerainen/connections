const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    account: "string", // Required

    // ending_before: "string",
    // expand: ["string"],
    // limit: 0,
    // relationship: { director: true, executive: true, owner: true, representative: true },
    // starting_after: "string",
  };
};
