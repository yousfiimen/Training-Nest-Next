import { Injectable, Query } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users = [];
  create(body) {
    return body;
  }

  findUsers(query) {
    return query;
  }

  findUser(params) {
    return params;
  }

  updateUser(params, body ) {
    return {...params, ...body};
  }

  deleteUser(params) {
    return params;
  }


}
