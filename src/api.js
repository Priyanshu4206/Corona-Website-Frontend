app.post("/updateComplete", async function (req, res) {
  try {
    var emailId = req.body.auditID;
    const flag = req.body.flag;
    console.log(emailId, " flag ", flag);
    if (flag && flag === "2") {
      // checking audit id whitelist
      const whitelist = (
        await cai_redis.hash_get({
          hash: "CAIS-API-AUDIT",
          keys: ["audit_inspection_whitelist"],
        })
      ).audit_inspection_whitelist;
      if (whitelist.length > 0) {
        if (!whitelist.includes(emailId)) {
          res.status(401).json({ Error: "Unauthorized" });
          return;
        }
      } else {
        res.status(401).json({ Error: "Unauthorized" });
        return;
      }
    }
    const rows = await connection2.query(
      'UPDATE png_demo_images SET completed = 1 where auditID ="' +
        emailId.toString() +
        '"'
    );
    res.json("1");
  } catch (error) {
    console.error("failed auditID: ", emailId, " ", error);
    res.send("0");
  }
});

app.post("/updateComplete", async function (req, res) {
  try {
    var emailId = req.body.auditID;
    const flag = req.body.flag;
    console.log(emailId, " flag ", flag);

    // Check audit id whitelist
    if (flag && flag === "2") {
      const whitelist = (
        await cai_redis.hash_get({
          hash: "CAIS-API-AUDIT",
          keys: ["audit_inspection_whitelist"],
        })
      ).audit_inspection_whitelist;
      if (whitelist.length > 0) {
        if (!whitelist.includes(emailId)) {
          res.status(401).json({ Error: "Unauthorized" });
          return;
        }
      } else {
        res.status(401).json({ Error: "Unauthorized" });
        return;
      }
    }

    // Execute the update query
    const result = await connection2.query(
      "UPDATE png_demo_images SET completed = 1 WHERE auditID = ?",
      [emailId.toString()]
    );

    // Check if any rows were affected
    if (result.affectedRows > 0) {
      res.json("1");
    } else {
      res.status(400).json({ Error: "Update failed" });
    }
  } catch (error) {
    console.error("failed auditID: ", emailId, " ", error);
    res.status(500).send("0");
  }
});
