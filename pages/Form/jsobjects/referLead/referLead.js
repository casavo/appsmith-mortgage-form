export default {
  run: async () => {
    await registerLead.run().then(() => {
      sendConfirmation.run().then(() => {
        showAlert('Segnalazione inviata con successo!', 'success');
      }).catch(() => {
        showAlert('Segnalazione inviata con successo! Ma non riceverai l\'email', 'info');
      });
    }).catch(() => {
      showAlert('Qualcosa è andato storto, ti preghiamo di riprovare', 'error');
    });
  }
}