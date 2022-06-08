import { Test } from '@nestjs/testing';
import { User } from './users.entity';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

describe('AuthService', async () => {
  // beforeEach(async () => {
  const fakeUsersService: Partial<UsersService> = {
    find: () => Promise.resolve([]),
    create: (email: string, password: string) =>
      Promise.resolve({ id: 1, email, password } as User),
  };
  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      { provide: UsersService, useValue: fakeUsersService },
    ],
  }).compile();
  const service: AuthService = module.get(AuthService);
  // });

  it('can create an instance of auth service', () => {
    expect(service).toBeDefined();
  });
});
