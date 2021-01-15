package models.entities;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;

/**
 * Created by anh.dang on 11/27/2016.
 */

@Entity
@Table(name = "person")
public class Person {

  @Id
  @GeneratedValue
  @Column(name = "personId", nullable = false)
  private Long personId;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "age", nullable = false)
  private int age;

  public Person(final String name, final int age) {
    this.name = name;
    this.age = age;
  }

  public Person() {
  }

  public static List<Person> findAll(EntityManager manager) {
    try {
      List<Person> resultList = null;
      resultList = manager.createQuery("Select a From Person a", Person.class).getResultList();
      return resultList;
    } catch (NoResultException e) {
      return Collections.<Person>emptyList();
    }
  }

  public Long getPersonId() {
    return personId;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public void setPersonId(Long personId) {
    this.personId = personId;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setAge(int age) {
    this.age = age;
  }

}
