import Text "mo:core/Text";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  type AdminProfile = {
    username : Text;
    principal : Principal;
    email : Text;
    passwordHash : Text;
  };

  module AdminProfile {
    public func compare(profile1 : AdminProfile, profile2 : AdminProfile) : Order.Order {
      switch (Text.compare(profile1.username, profile2.username)) {
        case (#equal) { Text.compare(profile1.email, profile2.email) };
	      case (order) { order };
      };
    };
  };

  type Enquiry = {
    name : Text;
    phone : Text;
    service : Text;
    address : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry1.timestamp, enquiry2.timestamp);
    };
  };

  type SetAdminProfileInput = {
    username : Text;
    email : Text;
    passwordHash : Text;
  };

  type Submission = {
    id : Nat;
    name : Text;
    phone : Text;
    service : Text;
    address : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub1.timestamp, sub2.timestamp);
    };

    public func compareById(sub1 : Submission, sub2 : Submission) : Order.Order {
      Nat.compare(sub1.id, sub2.id);
    };
  };

  var nextSubmissionId = 1;

  let submissions = Map.empty<Nat, Submission>();

  var currentAdmin : ?AdminProfile = null;

  func isCorrectPassword(password : Text, hash : Text) : Bool {
    password == hash;
  };

  public shared ({ caller }) func setAdminProfile(username : Text, email : Text, passwordHash : Text) : async () {
    if (Principal.fromText("2vxsx-fae") == caller) {
      Runtime.trap("Anonymous users cannot be admins.");
    };

    if (currentAdmin != null) { Runtime.trap("You can only have one admin."); };

    currentAdmin := ?{
      principal = caller;
      username;
      passwordHash;
      email;
    };
  };

  public shared ({ caller }) func loginAdmin(password : Text) : async () {
    if (currentAdmin == null) { Runtime.trap("No admin was found"); };

    switch (currentAdmin) {
      case (null) {
        Runtime.trap("No admin is set."); // Should be unreachable.
      };
      case (?admin) {
        if (not isCorrectPassword(password, admin.passwordHash)) {
          Runtime.trap("Incorrect password. Access Denied.");
        };
      };
    };
  };

  public query ({ caller }) func isAdmin() : async Bool {
    currentAdmin != null;
  };

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, service : Text, address : Text, message : Text) : async () {
    let submission : Submission = {
      id = nextSubmissionId;
      name;
      phone;
      service;
      address;
      message;
      timestamp = Time.now();
    };
    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort();
  };
};
