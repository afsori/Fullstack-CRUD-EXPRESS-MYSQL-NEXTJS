const reqFormRes = (response, result, status) => {
  const newForm = {
    result,
    status,
  }
  return response.json(newForm);
}

module.exports = {reqFormRes};