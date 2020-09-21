import Route from '@ember/routing/route';

export default class AuthenticatedJobsRoute extends Route {
  model() {
    return [
      {
        id: 1,
        jobNumber: 1,
        address: "42 wallaby way, sidney, australia",
        createdBy: 11,
        createdAt: new Date(),
        entity: 21,
        files: [],
        form: 31
      }, {
        id: 2,
        jobNumber: 2,
        address: "62 wallaby way, sidney, australia",
        createdBy: 12,
        createdAt: new Date(),
        entity: 22,
        files: [],
        form: 32
      }
    ]
  }
}
