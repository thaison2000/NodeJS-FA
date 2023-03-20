function resFromData(data) {
  return {error: '', data};
}

function resFromError(err) {
  return {error: err && err.message ? err.message : String(err), data: {}};
}

module.exports = {resFromData, resFromError};
