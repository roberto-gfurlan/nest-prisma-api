import { stringify } from 'querystring';
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

  it('getter of name fiels should return the name', () => {
    const userProps: UserProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const user = new UserEntity(userProps);
    expect(user.name).toBeDefined();
    expect(user.name).toBe(userProps.name);
    expect(typeof user.name).toBe('string');
  });

  it('getter of email fiels should return the email', () => {
    const userProps: UserProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const user = new UserEntity(userProps);
    expect(user.email).toBeDefined();
    expect(user.email).toBe(userProps.email);
    expect(typeof user.email).toBe('string');
  });

  it('getter of password fiels should return the password', () => {
    const userProps: UserProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const user = new UserEntity(userProps);
    expect(user.password).toBeDefined();
    expect(user.password).toBe(userProps.password);
    expect(typeof user.password).toBe('string');
  });

});