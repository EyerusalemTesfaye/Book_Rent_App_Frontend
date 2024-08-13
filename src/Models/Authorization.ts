import {Ability, AbilityBuilder} from "@casl/ability";
import AuthResult from "../Intefaces/AuthResult";
import Roles from "../Enums/Roles";


function Authorization(user: AuthResult) {

    const builder = new AbilityBuilder(Ability);

    if(user.Roles.includes(Roles.Admin)) {

        builder.can("create", "user");
        builder.can("read", "user");
        builder.can("update", "user");
        builder.can("delete", "user");

        builder.can("create", "choice");
        builder.can("read", "choice");
        builder.can("update", "choice");
        builder.can("delete", "choice");

        builder.can("create", "book");
        builder.can("read", "book");
        builder.can("update", "book");
        builder.can("delete", "book");

        
        builder.can("create", "bookupload");
        builder.can("read", "bookupload");
        // builder.can("update", "bookupload");
        // builder.can("delete", "bookupload");

        builder.can("create", "basequestionary");
        builder.can("read", "basequestionary");
        builder.can("update", "basequestionary");
        builder.can("delete", "basequestionary");

        builder.can("create", "questionary");
        builder.can("read", "questionary");
        builder.can("update", "questionary");
        builder.can("delete", "questionary");
        
        builder.can("create", "questionanswer");
        builder.can("read", "questionanswer");
        builder.can("update", "questionanswer");
        builder.can("delete", "questionanswer");
        
        builder.can("create", "rent");
        builder.can("read", "rent");
        builder.can("update", "rent");
        builder.can("delete", "rent");

    } else if(user.Roles.includes(Roles.Owner)) {

        builder.cannot("create", "user");
        // builder.can("read", "user");
        // builder.can("update", "user");
        // builder.cannot("delete", "user");
        
        builder.cannot("create", "choice");
        builder.can("read", "choice");
        builder.cannot("update", "choice");
        builder.cannot("delete", "choice");
        
        builder.can("create", "book");
        // builder.can("read", "book");
        builder.can("update", "book");
        builder.can("delete", "book");
        
        builder.can("create", "bookupload");
        // builder.can("read", "bookupload");
        builder.can("update", "bookupload");
        builder.can("delete", "bookupload");
        
        builder.can("create", "basequestionary");
        builder.can("read", "basequestionary");
        builder.can("update", "basequestionary");
        builder.can("delete", "basequestionary");

        builder.can("read", "questionary");

        // builder.can("create", "questionanswer");
        builder.can("read", "questionanswer");
        // builder.can("update", "questionanswer");
        // builder.can("delete", "questionanswer");
        
        builder.can("create", "rent");
        builder.can("read", "rent");
        builder.can("update", "rent", ["status"]);
        // builder.can("delete", "rent");

    }  else {

        builder.cannot("create", "user");
        builder.can("read", "user", { id: user.Id });
        builder.cannot("update", "user");
        builder.cannot("delete", "user");

        builder.can("read", "choice");

        builder.can("read", "book");

        builder.can("read", "bookupload");

        builder.can("read", "basequesionary");

        builder.can("read", "questionary");
        
        builder.can("create", "questionanswer");
        builder.can("read", "questionanswer");

        builder.can("create", "rent");
        builder.can("read", "rent");
        builder.can("update", "rent");

    }

    return builder.build();
}

export default Authorization;