const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_TWILIO_ACCOUNT_SID: $env.BUILDABLE_TWILIO_ACCOUNT_SID, // Required
    BUILDABLE_TWILIO_AUTH_TOKEN: $env.BUILDABLE_TWILIO_AUTH_TOKEN, // Required
    credentialListSid: "string", // Required

    // pageSize: 1,
  };
};
