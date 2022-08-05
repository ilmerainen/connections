const axios = require("axios");
const qs = require("qs");

const run = async (input) => {
  const {
    BUILDABLE_TWILIO_ACCOUNT_SID,
    BUILDABLE_TWILIO_AUTH_TOKEN,
    callSid,
    connectorName,
    name,
    parameter1Name,
    parameter1Value,
    parameter10Name,
    parameter10Value,
    parameter11Name,
    parameter11Value,
    parameter12Name,
    parameter12Value,
    parameter13Name,
    parameter13Value,
    parameter14Name,
    parameter14Value,
    parameter15Name,
    parameter15Value,
    parameter16Name,
    parameter16Value,
    parameter17Name,
    parameter17Value,
    parameter18Name,
    parameter18Value,
    parameter19Name,
    parameter19Value,
    parameter2Name,
    parameter2Value,
    parameter20Name,
    parameter20Value,
    parameter21Name,
    parameter21Value,
    parameter22Name,
    parameter22Value,
    parameter23Name,
    parameter23Value,
    parameter24Name,
    parameter24Value,
    parameter25Name,
    parameter25Value,
    parameter26Name,
    parameter26Value,
    parameter27Name,
    parameter27Value,
    parameter28Name,
    parameter28Value,
    parameter29Name,
    parameter29Value,
    parameter3Name,
    parameter3Value,
    parameter30Name,
    parameter30Value,
    parameter31Name,
    parameter31Value,
    parameter32Name,
    parameter32Value,
    parameter33Name,
    parameter33Value,
    parameter34Name,
    parameter34Value,
    parameter35Name,
    parameter35Value,
    parameter36Name,
    parameter36Value,
    parameter37Name,
    parameter37Value,
    parameter38Name,
    parameter38Value,
    parameter39Name,
    parameter39Value,
    parameter4Name,
    parameter4Value,
    parameter40Name,
    parameter40Value,
    parameter41Name,
    parameter41Value,
    parameter42Name,
    parameter42Value,
    parameter43Name,
    parameter43Value,
    parameter44Name,
    parameter44Value,
    parameter45Name,
    parameter45Value,
    parameter46Name,
    parameter46Value,
    parameter47Name,
    parameter47Value,
    parameter48Name,
    parameter48Value,
    parameter49Name,
    parameter49Value,
    parameter5Name,
    parameter5Value,
    parameter50Name,
    parameter50Value,
    parameter51Name,
    parameter51Value,
    parameter52Name,
    parameter52Value,
    parameter53Name,
    parameter53Value,
    parameter54Name,
    parameter54Value,
    parameter55Name,
    parameter55Value,
    parameter56Name,
    parameter56Value,
    parameter57Name,
    parameter57Value,
    parameter58Name,
    parameter58Value,
    parameter59Name,
    parameter59Value,
    parameter6Name,
    parameter6Value,
    parameter60Name,
    parameter60Value,
    parameter61Name,
    parameter61Value,
    parameter62Name,
    parameter62Value,
    parameter63Name,
    parameter63Value,
    parameter64Name,
    parameter64Value,
    parameter65Name,
    parameter65Value,
    parameter66Name,
    parameter66Value,
    parameter67Name,
    parameter67Value,
    parameter68Name,
    parameter68Value,
    parameter69Name,
    parameter69Value,
    parameter7Name,
    parameter7Value,
    parameter70Name,
    parameter70Value,
    parameter71Name,
    parameter71Value,
    parameter72Name,
    parameter72Value,
    parameter73Name,
    parameter73Value,
    parameter74Name,
    parameter74Value,
    parameter75Name,
    parameter75Value,
    parameter76Name,
    parameter76Value,
    parameter77Name,
    parameter77Value,
    parameter78Name,
    parameter78Value,
    parameter79Name,
    parameter79Value,
    parameter8Name,
    parameter8Value,
    parameter80Name,
    parameter80Value,
    parameter81Name,
    parameter81Value,
    parameter82Name,
    parameter82Value,
    parameter83Name,
    parameter83Value,
    parameter84Name,
    parameter84Value,
    parameter85Name,
    parameter85Value,
    parameter86Name,
    parameter86Value,
    parameter87Name,
    parameter87Value,
    parameter88Name,
    parameter88Value,
    parameter89Name,
    parameter89Value,
    parameter9Name,
    parameter9Value,
    parameter90Name,
    parameter90Value,
    parameter91Name,
    parameter91Value,
    parameter92Name,
    parameter92Value,
    parameter93Name,
    parameter93Value,
    parameter94Name,
    parameter94Value,
    parameter95Name,
    parameter95Value,
    parameter96Name,
    parameter96Value,
    parameter97Name,
    parameter97Value,
    parameter98Name,
    parameter98Value,
    parameter99Name,
    parameter99Value,
    statusCallback,
    statusCallbackMethod,
    track,
  } = input;

  verifyInput(input);

  try {
    const { data } = await axios({
      method: "post",
      url: `https://api.twilio.com/2010-04-01/Accounts/${BUILDABLE_TWILIO_ACCOUNT_SID}/Calls/${callSid}/Siprec.json`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      auth: { username: BUILDABLE_TWILIO_ACCOUNT_SID, password: BUILDABLE_TWILIO_AUTH_TOKEN },
      data: qs.stringify({
        ...(connectorName ? { ConnectorName: connectorName } : {}),
        ...(name ? { Name: name } : {}),
        ...(parameter1Name ? { "Parameter1.Name": parameter1Name } : {}),
        ...(parameter1Value ? { "Parameter1.Value": parameter1Value } : {}),
        ...(parameter10Name ? { "Parameter10.Name": parameter10Name } : {}),
        ...(parameter10Value ? { "Parameter10.Value": parameter10Value } : {}),
        ...(parameter11Name ? { "Parameter11.Name": parameter11Name } : {}),
        ...(parameter11Value ? { "Parameter11.Value": parameter11Value } : {}),
        ...(parameter12Name ? { "Parameter12.Name": parameter12Name } : {}),
        ...(parameter12Value ? { "Parameter12.Value": parameter12Value } : {}),
        ...(parameter13Name ? { "Parameter13.Name": parameter13Name } : {}),
        ...(parameter13Value ? { "Parameter13.Value": parameter13Value } : {}),
        ...(parameter14Name ? { "Parameter14.Name": parameter14Name } : {}),
        ...(parameter14Value ? { "Parameter14.Value": parameter14Value } : {}),
        ...(parameter15Name ? { "Parameter15.Name": parameter15Name } : {}),
        ...(parameter15Value ? { "Parameter15.Value": parameter15Value } : {}),
        ...(parameter16Name ? { "Parameter16.Name": parameter16Name } : {}),
        ...(parameter16Value ? { "Parameter16.Value": parameter16Value } : {}),
        ...(parameter17Name ? { "Parameter17.Name": parameter17Name } : {}),
        ...(parameter17Value ? { "Parameter17.Value": parameter17Value } : {}),
        ...(parameter18Name ? { "Parameter18.Name": parameter18Name } : {}),
        ...(parameter18Value ? { "Parameter18.Value": parameter18Value } : {}),
        ...(parameter19Name ? { "Parameter19.Name": parameter19Name } : {}),
        ...(parameter19Value ? { "Parameter19.Value": parameter19Value } : {}),
        ...(parameter2Name ? { "Parameter2.Name": parameter2Name } : {}),
        ...(parameter2Value ? { "Parameter2.Value": parameter2Value } : {}),
        ...(parameter20Name ? { "Parameter20.Name": parameter20Name } : {}),
        ...(parameter20Value ? { "Parameter20.Value": parameter20Value } : {}),
        ...(parameter21Name ? { "Parameter21.Name": parameter21Name } : {}),
        ...(parameter21Value ? { "Parameter21.Value": parameter21Value } : {}),
        ...(parameter22Name ? { "Parameter22.Name": parameter22Name } : {}),
        ...(parameter22Value ? { "Parameter22.Value": parameter22Value } : {}),
        ...(parameter23Name ? { "Parameter23.Name": parameter23Name } : {}),
        ...(parameter23Value ? { "Parameter23.Value": parameter23Value } : {}),
        ...(parameter24Name ? { "Parameter24.Name": parameter24Name } : {}),
        ...(parameter24Value ? { "Parameter24.Value": parameter24Value } : {}),
        ...(parameter25Name ? { "Parameter25.Name": parameter25Name } : {}),
        ...(parameter25Value ? { "Parameter25.Value": parameter25Value } : {}),
        ...(parameter26Name ? { "Parameter26.Name": parameter26Name } : {}),
        ...(parameter26Value ? { "Parameter26.Value": parameter26Value } : {}),
        ...(parameter27Name ? { "Parameter27.Name": parameter27Name } : {}),
        ...(parameter27Value ? { "Parameter27.Value": parameter27Value } : {}),
        ...(parameter28Name ? { "Parameter28.Name": parameter28Name } : {}),
        ...(parameter28Value ? { "Parameter28.Value": parameter28Value } : {}),
        ...(parameter29Name ? { "Parameter29.Name": parameter29Name } : {}),
        ...(parameter29Value ? { "Parameter29.Value": parameter29Value } : {}),
        ...(parameter3Name ? { "Parameter3.Name": parameter3Name } : {}),
        ...(parameter3Value ? { "Parameter3.Value": parameter3Value } : {}),
        ...(parameter30Name ? { "Parameter30.Name": parameter30Name } : {}),
        ...(parameter30Value ? { "Parameter30.Value": parameter30Value } : {}),
        ...(parameter31Name ? { "Parameter31.Name": parameter31Name } : {}),
        ...(parameter31Value ? { "Parameter31.Value": parameter31Value } : {}),
        ...(parameter32Name ? { "Parameter32.Name": parameter32Name } : {}),
        ...(parameter32Value ? { "Parameter32.Value": parameter32Value } : {}),
        ...(parameter33Name ? { "Parameter33.Name": parameter33Name } : {}),
        ...(parameter33Value ? { "Parameter33.Value": parameter33Value } : {}),
        ...(parameter34Name ? { "Parameter34.Name": parameter34Name } : {}),
        ...(parameter34Value ? { "Parameter34.Value": parameter34Value } : {}),
        ...(parameter35Name ? { "Parameter35.Name": parameter35Name } : {}),
        ...(parameter35Value ? { "Parameter35.Value": parameter35Value } : {}),
        ...(parameter36Name ? { "Parameter36.Name": parameter36Name } : {}),
        ...(parameter36Value ? { "Parameter36.Value": parameter36Value } : {}),
        ...(parameter37Name ? { "Parameter37.Name": parameter37Name } : {}),
        ...(parameter37Value ? { "Parameter37.Value": parameter37Value } : {}),
        ...(parameter38Name ? { "Parameter38.Name": parameter38Name } : {}),
        ...(parameter38Value ? { "Parameter38.Value": parameter38Value } : {}),
        ...(parameter39Name ? { "Parameter39.Name": parameter39Name } : {}),
        ...(parameter39Value ? { "Parameter39.Value": parameter39Value } : {}),
        ...(parameter4Name ? { "Parameter4.Name": parameter4Name } : {}),
        ...(parameter4Value ? { "Parameter4.Value": parameter4Value } : {}),
        ...(parameter40Name ? { "Parameter40.Name": parameter40Name } : {}),
        ...(parameter40Value ? { "Parameter40.Value": parameter40Value } : {}),
        ...(parameter41Name ? { "Parameter41.Name": parameter41Name } : {}),
        ...(parameter41Value ? { "Parameter41.Value": parameter41Value } : {}),
        ...(parameter42Name ? { "Parameter42.Name": parameter42Name } : {}),
        ...(parameter42Value ? { "Parameter42.Value": parameter42Value } : {}),
        ...(parameter43Name ? { "Parameter43.Name": parameter43Name } : {}),
        ...(parameter43Value ? { "Parameter43.Value": parameter43Value } : {}),
        ...(parameter44Name ? { "Parameter44.Name": parameter44Name } : {}),
        ...(parameter44Value ? { "Parameter44.Value": parameter44Value } : {}),
        ...(parameter45Name ? { "Parameter45.Name": parameter45Name } : {}),
        ...(parameter45Value ? { "Parameter45.Value": parameter45Value } : {}),
        ...(parameter46Name ? { "Parameter46.Name": parameter46Name } : {}),
        ...(parameter46Value ? { "Parameter46.Value": parameter46Value } : {}),
        ...(parameter47Name ? { "Parameter47.Name": parameter47Name } : {}),
        ...(parameter47Value ? { "Parameter47.Value": parameter47Value } : {}),
        ...(parameter48Name ? { "Parameter48.Name": parameter48Name } : {}),
        ...(parameter48Value ? { "Parameter48.Value": parameter48Value } : {}),
        ...(parameter49Name ? { "Parameter49.Name": parameter49Name } : {}),
        ...(parameter49Value ? { "Parameter49.Value": parameter49Value } : {}),
        ...(parameter5Name ? { "Parameter5.Name": parameter5Name } : {}),
        ...(parameter5Value ? { "Parameter5.Value": parameter5Value } : {}),
        ...(parameter50Name ? { "Parameter50.Name": parameter50Name } : {}),
        ...(parameter50Value ? { "Parameter50.Value": parameter50Value } : {}),
        ...(parameter51Name ? { "Parameter51.Name": parameter51Name } : {}),
        ...(parameter51Value ? { "Parameter51.Value": parameter51Value } : {}),
        ...(parameter52Name ? { "Parameter52.Name": parameter52Name } : {}),
        ...(parameter52Value ? { "Parameter52.Value": parameter52Value } : {}),
        ...(parameter53Name ? { "Parameter53.Name": parameter53Name } : {}),
        ...(parameter53Value ? { "Parameter53.Value": parameter53Value } : {}),
        ...(parameter54Name ? { "Parameter54.Name": parameter54Name } : {}),
        ...(parameter54Value ? { "Parameter54.Value": parameter54Value } : {}),
        ...(parameter55Name ? { "Parameter55.Name": parameter55Name } : {}),
        ...(parameter55Value ? { "Parameter55.Value": parameter55Value } : {}),
        ...(parameter56Name ? { "Parameter56.Name": parameter56Name } : {}),
        ...(parameter56Value ? { "Parameter56.Value": parameter56Value } : {}),
        ...(parameter57Name ? { "Parameter57.Name": parameter57Name } : {}),
        ...(parameter57Value ? { "Parameter57.Value": parameter57Value } : {}),
        ...(parameter58Name ? { "Parameter58.Name": parameter58Name } : {}),
        ...(parameter58Value ? { "Parameter58.Value": parameter58Value } : {}),
        ...(parameter59Name ? { "Parameter59.Name": parameter59Name } : {}),
        ...(parameter59Value ? { "Parameter59.Value": parameter59Value } : {}),
        ...(parameter6Name ? { "Parameter6.Name": parameter6Name } : {}),
        ...(parameter6Value ? { "Parameter6.Value": parameter6Value } : {}),
        ...(parameter60Name ? { "Parameter60.Name": parameter60Name } : {}),
        ...(parameter60Value ? { "Parameter60.Value": parameter60Value } : {}),
        ...(parameter61Name ? { "Parameter61.Name": parameter61Name } : {}),
        ...(parameter61Value ? { "Parameter61.Value": parameter61Value } : {}),
        ...(parameter62Name ? { "Parameter62.Name": parameter62Name } : {}),
        ...(parameter62Value ? { "Parameter62.Value": parameter62Value } : {}),
        ...(parameter63Name ? { "Parameter63.Name": parameter63Name } : {}),
        ...(parameter63Value ? { "Parameter63.Value": parameter63Value } : {}),
        ...(parameter64Name ? { "Parameter64.Name": parameter64Name } : {}),
        ...(parameter64Value ? { "Parameter64.Value": parameter64Value } : {}),
        ...(parameter65Name ? { "Parameter65.Name": parameter65Name } : {}),
        ...(parameter65Value ? { "Parameter65.Value": parameter65Value } : {}),
        ...(parameter66Name ? { "Parameter66.Name": parameter66Name } : {}),
        ...(parameter66Value ? { "Parameter66.Value": parameter66Value } : {}),
        ...(parameter67Name ? { "Parameter67.Name": parameter67Name } : {}),
        ...(parameter67Value ? { "Parameter67.Value": parameter67Value } : {}),
        ...(parameter68Name ? { "Parameter68.Name": parameter68Name } : {}),
        ...(parameter68Value ? { "Parameter68.Value": parameter68Value } : {}),
        ...(parameter69Name ? { "Parameter69.Name": parameter69Name } : {}),
        ...(parameter69Value ? { "Parameter69.Value": parameter69Value } : {}),
        ...(parameter7Name ? { "Parameter7.Name": parameter7Name } : {}),
        ...(parameter7Value ? { "Parameter7.Value": parameter7Value } : {}),
        ...(parameter70Name ? { "Parameter70.Name": parameter70Name } : {}),
        ...(parameter70Value ? { "Parameter70.Value": parameter70Value } : {}),
        ...(parameter71Name ? { "Parameter71.Name": parameter71Name } : {}),
        ...(parameter71Value ? { "Parameter71.Value": parameter71Value } : {}),
        ...(parameter72Name ? { "Parameter72.Name": parameter72Name } : {}),
        ...(parameter72Value ? { "Parameter72.Value": parameter72Value } : {}),
        ...(parameter73Name ? { "Parameter73.Name": parameter73Name } : {}),
        ...(parameter73Value ? { "Parameter73.Value": parameter73Value } : {}),
        ...(parameter74Name ? { "Parameter74.Name": parameter74Name } : {}),
        ...(parameter74Value ? { "Parameter74.Value": parameter74Value } : {}),
        ...(parameter75Name ? { "Parameter75.Name": parameter75Name } : {}),
        ...(parameter75Value ? { "Parameter75.Value": parameter75Value } : {}),
        ...(parameter76Name ? { "Parameter76.Name": parameter76Name } : {}),
        ...(parameter76Value ? { "Parameter76.Value": parameter76Value } : {}),
        ...(parameter77Name ? { "Parameter77.Name": parameter77Name } : {}),
        ...(parameter77Value ? { "Parameter77.Value": parameter77Value } : {}),
        ...(parameter78Name ? { "Parameter78.Name": parameter78Name } : {}),
        ...(parameter78Value ? { "Parameter78.Value": parameter78Value } : {}),
        ...(parameter79Name ? { "Parameter79.Name": parameter79Name } : {}),
        ...(parameter79Value ? { "Parameter79.Value": parameter79Value } : {}),
        ...(parameter8Name ? { "Parameter8.Name": parameter8Name } : {}),
        ...(parameter8Value ? { "Parameter8.Value": parameter8Value } : {}),
        ...(parameter80Name ? { "Parameter80.Name": parameter80Name } : {}),
        ...(parameter80Value ? { "Parameter80.Value": parameter80Value } : {}),
        ...(parameter81Name ? { "Parameter81.Name": parameter81Name } : {}),
        ...(parameter81Value ? { "Parameter81.Value": parameter81Value } : {}),
        ...(parameter82Name ? { "Parameter82.Name": parameter82Name } : {}),
        ...(parameter82Value ? { "Parameter82.Value": parameter82Value } : {}),
        ...(parameter83Name ? { "Parameter83.Name": parameter83Name } : {}),
        ...(parameter83Value ? { "Parameter83.Value": parameter83Value } : {}),
        ...(parameter84Name ? { "Parameter84.Name": parameter84Name } : {}),
        ...(parameter84Value ? { "Parameter84.Value": parameter84Value } : {}),
        ...(parameter85Name ? { "Parameter85.Name": parameter85Name } : {}),
        ...(parameter85Value ? { "Parameter85.Value": parameter85Value } : {}),
        ...(parameter86Name ? { "Parameter86.Name": parameter86Name } : {}),
        ...(parameter86Value ? { "Parameter86.Value": parameter86Value } : {}),
        ...(parameter87Name ? { "Parameter87.Name": parameter87Name } : {}),
        ...(parameter87Value ? { "Parameter87.Value": parameter87Value } : {}),
        ...(parameter88Name ? { "Parameter88.Name": parameter88Name } : {}),
        ...(parameter88Value ? { "Parameter88.Value": parameter88Value } : {}),
        ...(parameter89Name ? { "Parameter89.Name": parameter89Name } : {}),
        ...(parameter89Value ? { "Parameter89.Value": parameter89Value } : {}),
        ...(parameter9Name ? { "Parameter9.Name": parameter9Name } : {}),
        ...(parameter9Value ? { "Parameter9.Value": parameter9Value } : {}),
        ...(parameter90Name ? { "Parameter90.Name": parameter90Name } : {}),
        ...(parameter90Value ? { "Parameter90.Value": parameter90Value } : {}),
        ...(parameter91Name ? { "Parameter91.Name": parameter91Name } : {}),
        ...(parameter91Value ? { "Parameter91.Value": parameter91Value } : {}),
        ...(parameter92Name ? { "Parameter92.Name": parameter92Name } : {}),
        ...(parameter92Value ? { "Parameter92.Value": parameter92Value } : {}),
        ...(parameter93Name ? { "Parameter93.Name": parameter93Name } : {}),
        ...(parameter93Value ? { "Parameter93.Value": parameter93Value } : {}),
        ...(parameter94Name ? { "Parameter94.Name": parameter94Name } : {}),
        ...(parameter94Value ? { "Parameter94.Value": parameter94Value } : {}),
        ...(parameter95Name ? { "Parameter95.Name": parameter95Name } : {}),
        ...(parameter95Value ? { "Parameter95.Value": parameter95Value } : {}),
        ...(parameter96Name ? { "Parameter96.Name": parameter96Name } : {}),
        ...(parameter96Value ? { "Parameter96.Value": parameter96Value } : {}),
        ...(parameter97Name ? { "Parameter97.Name": parameter97Name } : {}),
        ...(parameter97Value ? { "Parameter97.Value": parameter97Value } : {}),
        ...(parameter98Name ? { "Parameter98.Name": parameter98Name } : {}),
        ...(parameter98Value ? { "Parameter98.Value": parameter98Value } : {}),
        ...(parameter99Name ? { "Parameter99.Name": parameter99Name } : {}),
        ...(parameter99Value ? { "Parameter99.Value": parameter99Value } : {}),
        ...(statusCallback ? { StatusCallback: statusCallback } : {}),
        ...(statusCallbackMethod ? { StatusCallbackMethod: statusCallbackMethod } : {}),
        ...(track ? { Track: track } : {}),
      }),
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
const verifyInput = ({ BUILDABLE_TWILIO_ACCOUNT_SID, BUILDABLE_TWILIO_AUTH_TOKEN, callSid }) => {
  const ERRORS = {
    INVALID_BUILDABLE_TWILIO_ACCOUNT_SID:
      "A valid BUILDABLE_TWILIO_ACCOUNT_SID field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_BUILDABLE_TWILIO_AUTH_TOKEN:
      "A valid BUILDABLE_TWILIO_AUTH_TOKEN field (string) was not provided in the input. Create your appropriate Connection to automatically add it.",
    INVALID_CALL_SID: "A valid callSid field (string) was not provided in the input.",
  };

  if (typeof BUILDABLE_TWILIO_ACCOUNT_SID !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_ACCOUNT_SID);
  if (typeof BUILDABLE_TWILIO_AUTH_TOKEN !== "string")
    throw new Error(ERRORS.INVALID_BUILDABLE_TWILIO_AUTH_TOKEN);
  if (typeof callSid !== "string") throw new Error(ERRORS.INVALID_CALL_SID);
};
