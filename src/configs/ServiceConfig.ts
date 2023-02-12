import serviceJson from "../resources/serviceConfig.json" assert {type : "json"}

interface ServiceEntry {
  name: string;
  url: string;
  swaggerURL:string
}

type ServiceEntryList = Array<ServiceEntry>

const serviceRegistry: ServiceEntryList = serviceJson;

export default serviceRegistry;
