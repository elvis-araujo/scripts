/*
 *****************************************************
 * AVISO IMPORTANTE:
 * Este script é de propriedade intelectual protegida.
 * Cópia não autorizada resultará em ações legais.
 *****************************************************
 */
(function () {
    const __main__ = async () => {
        alert('q');
        window?.OneSignalDeferred = window?.OneSignalDeferred || [];
        OneSignalDeferred.push(async function (OneSignal) {
            await OneSignal.init({
                appId: "30b93967-0b60-44c9-95ff-7c118ff914e6",
            });
        });
    }
    __main__();
})();
