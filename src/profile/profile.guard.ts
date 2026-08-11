import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assuming you have user information in the request object
    console.log('User from request:', request);
    // Implement your guard logic here
    // For example, check if the user has the required role or permission
    if (user && user.role === 'admin') {
      console.log(user)
      return true;
    }
    return false;
  }
}
