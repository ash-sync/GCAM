export const handleDuplicateError = (err: any) => {
  const statusCode = 500;
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  return {
    statusCode,
    message: `${extractedMessage} already exists`,
  };
};
