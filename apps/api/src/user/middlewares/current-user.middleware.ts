import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User} from '@prisma/client'
import { UserService } from '../user.service';

declare global {
  namespace Express {
    interface Request {
      session: any;
      user: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.session ?? {};

    if (userId) {
      const user = await this.userService.user({id: userId});
      req.user = user;
    }

    next();

  }
}
