import IEquipment from "../interfaces/IEquipment";
import IHouse from "../interfaces/IHouse";
import IProposal from "../interfaces/IProposal";

async function randomWait() {
  /*
  await new Proise((r) =>
    setTimeout(r, 1000 + Math.floor(Math.random() * 2000))
  );*/
}


export async function getProposals(): Promise<IProposal[]> {
  await randomWait();

  return [
    {
      id: 1,
      title: "Éteindre les lampadaires à 22h",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum augue ipsum, at facilisis dolor elementum non. Morbi scelerisque risus eget rhoncus sagittis. Nullam non posuere turpis. Sed dapibus in est eget porttitor. Praesent sed luctus ex. Proin vulputate risus eget mauris gravida, eu suscipit libero posuere. Donec scelerisque, dui posuere auctor varius, metus urna pellentesque tellus, sit amet rutrum leo sapien ac eros. Donec commodo ligula ut dictum gravida. Suspendisse pellentesque nisl eu tempor tempor. Integer nec varius ante, quis blandit elit. Curabitur blandit fringilla neque, vel tristique leo pretium vitae. Fusce elementum, augue sit amet pretium mollis, quam sapien fringilla lacus, ac pellentesque orci velit nec libero. Mauris quis imperdiet velit. Phasellus ut lorem a libero porta rutrum in eu nibh. Duis diam ante, egestas sit amet sem vitae, varius pharetra nulla.",
      endAt: "2023-05-19T22:16:28.155Z",
      approvePercent: 30,
    },
    {
      id: 2,
      title: "Ajouter une ligne de tram",
      description: "Etiam tempor, mauris nec pretium ultricies, massa urna sollicitudin orci, vel rutrum quam ligula eget sem. Sed id lobortis mauris. Integer aliquet orci sed facilisis malesuada. Vivamus lacus tellus, tincidunt nec nisl vitae, consequat commodo felis. Vivamus pellentesque tortor quis bibendum congue. Morbi in sodales nisl, sed facilisis nisi. Sed ligula erat, viverra vel lorem id, consequat aliquam sapien. Quisque vel mauris non eros maximus faucibus. Duis vel vehicula justo.",
      endAt: "2023-05-20T22:16:28.155Z",
      approvePercent: 67,
    },
  ]
}

export async function getHouse(userId: number): Promise<IHouse> {
  await randomWait();

  return {
    id: 1,
    adress: "27 rue de bezannes",
    cp: "51100",
    ville: "Reims",
  };
}

export async function getEquipments(houseId: number): Promise<IEquipment[]> {
  await randomWait();

  return [
    {
      type: 'conso',
      data: ""
    }
  ]
}