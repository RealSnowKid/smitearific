function ProperGodNames(response) {
    for (let i = 0; i < response.data._embedded.godses.length; i++) {
        const element = response.data._embedded.godses[i];
        const regex = /^.*[A-Z].*[A-Z].*$/g;

        switch (element.god) {
            case "AMC":
                response.data._embedded.godses[i].god = "Ah Muzen Cab";
                break;

            case "Change":
                response.data._embedded.godses[i].god = "Chang'e";
                break;

            default:
                if (element.god.match(regex)) {
                    response.data._embedded.godses[i].god = element.god.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                }
                else {
                    response.data._embedded.godses[i].god = element.god;
                }
                break;
        }
    }
}

export default {
    ProperGodNames
}