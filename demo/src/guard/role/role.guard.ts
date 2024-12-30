import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const admin = this.reflector.get<string[]>('role', context.getHandler());
    const request = context.switchToHttp().getRequest<Request>();
    /* console.log('admin', admin);
    console.log('request', request.headers); */
    /* console.log('admin', admin);
    console.log('request', request.query);
    console.log('RoleGuard'); */

    return admin ? admin.includes(request.query.role as string) : false;
    // return true;
  }
}
