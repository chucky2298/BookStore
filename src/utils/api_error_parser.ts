export default (error: any) => {
  let err = '';

  try {
    if (!error.response.data.details) {
      err = `${error.response.data.message}${error.response.status === 500 ? `\nDebug Id: ${error.response.data.code}` : ''}`;
    } else if (Array.isArray(error.response.data.details)) {
      const missingParams = error.response.data.details.map((item: any) => item.message);

      err = `${error.response.data.message}:\n${missingParams}`;
    } else {
      err = error.response.data.details;
    }

    return err !== '' && err !== 'undefined' ? err : 'Internal Error';
  } catch (e) {
    return 'Internal Error';
  }
};
