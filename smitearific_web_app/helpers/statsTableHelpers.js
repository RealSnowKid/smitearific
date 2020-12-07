function ProperGodNames(response) {
    for (let i = 0; i < response.data._embedded.gods.length; i++) {
        const element = response.data._embedded.gods[i];
        const regex = /^.*[A-Z].*[A-Z].*$/g;

        switch (element.god) {
            case "AMC":
                response.data._embedded.gods[i].god = "Ah Muzen Cab";
                break;

            case "Change":
                response.data._embedded.gods[i].god = "Chang'e";
                break;

            default:
                if (element.god.match(regex)) {
                    response.data._embedded.gods[i].god = element.god.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
                }
                else {
                    response.data._embedded.gods[i].god = element.god;
                }
                break;
        }
    }
}

function NameToSource(name) {
    const link = "https://web2.hirez.com/smite/god-icons/";
    const extention = ".jpg";
    let source = "";
    const regex = /[A-Z].*[A-Z].*/g;

    switch (name) {
        case "Ah Muzen Cab":
            source = link + "ah-muzen-cab" + extention;
            break;

        case "Chang'e":
            source = link + "change" + extention;
            break;

        default:
            if (name.match(regex)) {
                // response.data._embedded.gods[i].god = element.god.match(/[A-Z][a-z]+|[0-9]+/g).join("-");
                source = link + name.match(/[A-Z][a-z]+|[0-9]+/g).join("-").toLowerCase() + extention;
            }
            else {
                source = link + name.toLowerCase() + extention;
            }
            break;
    }

    return source;
}

export default {
    ProperGodNames,
    NameToSource
}