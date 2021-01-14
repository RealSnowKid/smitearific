function ProperGodNames(response) {
    const element = response;
    const regex = /^.*[A-Z].*[A-Z].*$/g;

    switch (response) {
        case "AhMuzenCab":
            return "Ah Muzen Cab";
            break;

        default:
            if (element.match(regex)) {
                return element.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
            }
            else {
                return element;
            }
            break;
    }
}
export default {
    ProperGodNames
}