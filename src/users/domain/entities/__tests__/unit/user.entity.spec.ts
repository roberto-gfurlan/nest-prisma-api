import { UserEntity, UserProps } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity', () => {
  it('should create a user with the given properties', () => {
    const userProps: UserProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const user = new UserEntity(userProps);

    expect(user.props.name).toBe(userProps.name);
    expect(user.props.email).toBe(userProps.email);
    expect(user.props.password).toBe(userProps.password);
    expect(user.props.createdAt).toBeInstanceOf(Date);
  });

  it('should set createdAt to the current date if not provided', () => {
    const userProps: UserProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const user = new UserEntity(userProps);

    expect(user.props.createdAt).toBeInstanceOf(Date);
  });

  it('should use the provided createdAt date if given', () => {
    const createdAt = new Date('2023-01-01');
    const userProps: UserProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt,
    };

    const user = new UserEntity(userProps);

    expect(user.props.createdAt).toBe(createdAt);
  });
});