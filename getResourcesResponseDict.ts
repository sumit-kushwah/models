export interface Paging {
  limit: number;
  page: number;
  pages: number;
}

export interface GetResourcesResponseDict {
  data: any;
  paging: Paging;
}

export class GetResourcesResponse implements GetResourcesResponseDict {
  constructor(public data: any, public paging: Paging) {}
}
