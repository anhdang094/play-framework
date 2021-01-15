package controllers;

import com.google.inject.Inject;
import models.entities.Person;
import play.Configuration;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class Application extends Controller {

    public Result index(String other) {
        return ok(index.render());
    }

    public Result check() {
      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory("anhdang.database");

      EntityManager entitymanager = emfactory.createEntityManager( );
      entitymanager.getTransaction( ).begin( );

      Person person = new Person( );
      person.setAge(13);
      person.setName("Anh");

      entitymanager.persist( person );
      entitymanager.getTransaction( ).commit( );

      entitymanager.close( );
      emfactory.close( );
      return ok("success");
    }

}
