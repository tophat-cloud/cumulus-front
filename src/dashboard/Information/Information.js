import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DashboardComponent from "../Dashboard";
import { useStyles } from "../useStyles";

export default function Information() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <DashboardComponent>
      <h1>Documents</h1>
      <h3>SDK 연결 방법</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        nisi nec ante tempor suscipit. Sed vitae suscipit nibh. Praesent sed
        dictum risus, ut pulvinar massa. Donec quis metus aliquam, sollicitudin
        odio vitae, tincidunt quam. Maecenas semper odio eu tortor elementum, ut
        vestibulum ex bibendum. Morbi in sem efficitur, consectetur mi eget,
        vulputate nibh. Nam dignissim ex id risus condimentum mattis. Vivamus
        sagittis fermentum ante, non commodo augue tristique ut. Donec bibendum
        rhoncus odio vitae semper. Integer placerat mi a enim placerat, sed
        mollis lacus iaculis. Mauris aliquam, urna sed laoreet malesuada, magna
        nibh tempor dui, ac interdum eros purus sit amet massa. Sed id auctor
        mi. Vestibulum nibh risus, lobortis eu consequat vitae, vestibulum ac
        neque.
      </p>

      <p>
        Proin ultricies velit iaculis felis tristique, id fringilla turpis
        maximus. Proin at tristique mauris. Pellentesque felis enim, molestie
        eget eros id, vehicula gravida diam. Nulla facilisi. Phasellus et neque
        et libero consequat sagittis non vitae purus. Vivamus eget suscipit
        mauris, non sagittis nisl. Sed justo eros, rhoncus nec luctus non,
        elementum sit amet tortor. Etiam laoreet venenatis rhoncus. Cras
        interdum, diam vehicula scelerisque commodo, sapien mi bibendum nibh, id
        semper urna mauris sit amet erat. Aliquam porta mauris id nisl mattis,
        nec pharetra nisi aliquet. Sed porta eu tortor in gravida. Praesent
        ornare magna eu pretium sagittis. Ut venenatis ante eget justo hendrerit
        iaculis. Curabitur finibus tincidunt neque sed vehicula. In hac
        habitasse platea dictumst. Proin iaculis euismod elit, a tempus sapien
        tempor vel.
      </p>
    </DashboardComponent>
  );
}
